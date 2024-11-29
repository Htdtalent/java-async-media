package learn.todos.models;

import java.util.Objects;

public class ToDo {
    private int id;
    private String description;

    public ToDo() {
    }

    public ToDo(int id, String description) {
        this.id = id;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ToDo toDo = (ToDo) o;
        return id == toDo.id &&
                description.equals(toDo.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description);
    }
}
