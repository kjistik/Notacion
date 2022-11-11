package kjistik.backend.Services.Teachers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kjistik.backend.Models.Teachers;
import kjistik.backend.Repository.TeachersRepository;

@Service
public class TeachersServiceImp implements TeachersService {

    @Autowired
    TeachersRepository repo;

    @Override
    public List<Teachers> all() {
        return repo.findAll();
    }

    @Override
    public Teachers one(Long id) {
        return repo.findById(id).orElseThrow();
    }

    @Override
    public Teachers newTeacher(Teachers nuevo) {
        return repo.save(nuevo);
    }

    @Override
    public Teachers change(Teachers newDocente, Long id) {
        return repo.findById(id)
                .map(docente -> {
                    docente.setTeacher_name(newDocente.getTeacher_name());
                    docente.setTeacher_lastName(newDocente.getTeacher_lastName());
                    docente.setSubject_teacher(newDocente.getSubject_teacher());
                    docente.setActive(newDocente.isActive());
                    return repo.save(docente);
                })
                .orElseGet(() -> {
                    newDocente.setIdTeacher(id);
                    return repo.save(newDocente);
                });
    }

    @Override
    public Teachers disable(Teachers teacher, Long id) {
        return repo.findById(id)
                .map(docente -> {
                    docente.setActive(teacher.isActive());
                    return repo.save(docente);
                }).orElseThrow();
    }
    /*
     * @Override
     * public void delete(Long id) {
     * repo.deleteById(id);
     * }
     */
}