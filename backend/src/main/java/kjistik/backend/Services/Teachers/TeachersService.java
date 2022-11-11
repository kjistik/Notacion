package kjistik.backend.Services.Teachers;

import java.util.List;

import kjistik.backend.Models.Teachers;

public interface TeachersService {

    List<Teachers> all();

    Teachers one(Long id);

    Teachers newTeacher(Teachers nuevo);

    Teachers change(Teachers teacher, Long id);

    Teachers disable(Teachers teacher, Long id);
    // void delete(Long id);
}