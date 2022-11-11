package kjistik.backend.Services.Students;

import java.util.List;

import kjistik.backend.Models.Students;

public interface StudentService {

    List<Students> all();

    Students one(Long id);

    Students newStudent(Students nuevo);

    Students Change(Students alumno, Long id);

    // void delete(Long id);

    Students disable(Students student, Long id);
}
