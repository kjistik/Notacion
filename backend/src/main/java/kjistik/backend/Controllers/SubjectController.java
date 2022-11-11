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

import kjistik.backend.Models.Subject;
import kjistik.backend.Services.Subjects.SubjectServiceImp;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/materias")

public class SubjectController {

    @Autowired
    SubjectServiceImp service;

    @GetMapping("/todos")
    List<Subject> all() {
        return service.all();

    }

    @GetMapping("/uno/{id}")
    Subject one(@PathVariable Long id) {
        return service.one(id);
    }

    @PostMapping("/nuevo")
    Subject newSubject(@RequestBody Subject newSubject) {
        return service.newSubject(newSubject);
    }

    @PutMapping("/cambiar/{id}")
    Subject change(@RequestBody Subject subject, @PathVariable Long id) {
        return service.change(subject, id);

        /*
         * @DeleteMapping("/borrar/{id}")
         * void deleteById(@PathVariable Long id){
         * service.delete(id);
         * }
         */
    }
}