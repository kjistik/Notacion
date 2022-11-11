package kjistik.backend.Services.Grades;

import java.util.List;

import kjistik.backend.Models.Grades;

public interface GradesService {

    List<Grades> all();

    Grades one(Long id);

    Grades newGrade(Grades nuevo);

    Grades Change(Grades grade, Long id);

    void delete(Long id);
}