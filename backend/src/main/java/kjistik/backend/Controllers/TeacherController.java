package kjistik.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kjistik.backend.Models.Teachers;
import kjistik.backend.Services.Teachers.TeachersService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/docentes")
public class TeacherController {

    @Autowired
    TeachersService service;

    @GetMapping("/todos")
    List<Teachers> all() {
        return service.all();
    }

    @GetMapping("/uno/{id}")
    Teachers one(@PathVariable Long id) {
        return service.one(id);
    }

    @PostMapping("/nuevo")
    Teachers newTeachers(@RequestBody Teachers docente) {
        return service.newTeacher(docente);
    }

    @PutMapping("/cambiar/{id}")
    Teachers change(@RequestBody Teachers docente, @PathVariable Long id) {
        return service.change(docente, id);
    }

    @PutMapping("/borrar/{id}")
    Teachers disable(@RequestBody Teachers docente, @PathVariable Long id) {
        return service.disable(docente, id);
    }

    /*
     * @DeleteMapping("/borrar/{id}")
     * void delete(@PathVariable Long id) {
     * service.delete(id);
     * }
     */
}
