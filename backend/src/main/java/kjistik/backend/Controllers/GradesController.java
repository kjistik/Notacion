package kjistik.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kjistik.backend.Models.Grades;
import kjistik.backend.Services.Grades.GradesService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/calificaciones")
public class GradesController {

    @Autowired
    GradesService service;

    @GetMapping("/todos")
    List<Grades> all() {
        return service.all();
    }

    @GetMapping("/uno/{id}")
    Grades one(@PathVariable Long id) {
        return service.one(id);
    }

    @PostMapping("/nuevo")
    Grades newGrade(@RequestBody Grades nuevo) {
        return service.newGrade(nuevo);
    }

    /*
     * @PutMapping("/cambiar/{id}")
     * Grades change(@RequestBody Grades grade, @PathVariable Long id) {
     * return service.Change(grade, id);
     * }
     */

    @DeleteMapping("/borrar/{id}")
    void delete(@PathVariable Long id) {
        service.delete(id);
    }
}