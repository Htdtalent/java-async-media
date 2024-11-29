package learn.todos.controllers;

import learn.todos.models.ToDo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://127.0.0.1:8081"})
@RequestMapping("/api/todos")
public class ToDosController {
    private static int nextId = 11;
    private static List<ToDo> toDos = new ArrayList<>(List.of(
            new ToDo(1, "Buy milk."),
            new ToDo(2, "Walk the dog."),
            new ToDo(3, "Wash the car."),
            new ToDo(4, "Workout."),
            new ToDo(5, "Make dinner reservations."),
            new ToDo(6, "Cook dinner."),
            new ToDo(7, "Pack a lunch."),
            new ToDo(8, "Give the dog a bath"),
            new ToDo(9, "Change the oil."),
            new ToDo(10, "Get cash from the ATM.")
    ));

    @GetMapping
    public List<ToDo> get() {
        return toDos;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> get(@PathVariable int id) {
        ToDo toDo = toDos.stream().filter(t -> t.getId() == id).findFirst().orElse(null);
        if (toDo == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(toDo);
    }

    @PostMapping
    public ResponseEntity<Object> post(@RequestBody(required = false) ToDo toDo) {
        List<String> errors = validateToDo(toDo);
        if (errors.size() > 0) {
            return ResponseEntity.badRequest().body(errors);
        }

        toDo.setId(nextId);
        nextId++;
        toDos.add(toDo);

        URI uri = URI.create(String.format("/api/todos/%s", toDo.getId()));

        return ResponseEntity.created(uri).body(toDo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> put(@PathVariable int id, @RequestBody(required = false) ToDo toDo) {
        List<String> errors = validateToDo(toDo);

        if (errors.size() > 0) {
            return ResponseEntity.badRequest().body(errors);
        }

        if (id != toDo.getId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        ToDo toDoToUpdate = toDos.stream().filter(t -> t.getId() == id).findFirst().orElse(null);
        if (toDoToUpdate == null) {
            return ResponseEntity.notFound().build();
        }

        toDoToUpdate.setDescription(toDo.getDescription());

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        ToDo toDoToDelete = toDos.stream().filter(t -> t.getId() == id).findFirst().orElse(null);
        if (toDoToDelete == null) {
            return ResponseEntity.notFound().build();
        }

        toDos.remove(toDoToDelete);

        return ResponseEntity.noContent().build();
    }

    private List<String> validateToDo(ToDo toDo) {
        List<String> errors = new ArrayList<>();

        if (toDo == null) {
            errors.add("Please provide a TODO.");
            return errors;
        }

        if (toDo.getDescription() == null || toDo.getDescription().isBlank()) {
            errors.add("Please provide a description.");
        }

        return errors;
    }
}
