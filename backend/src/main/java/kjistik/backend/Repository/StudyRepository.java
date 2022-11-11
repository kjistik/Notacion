package kjistik.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kjistik.backend.Models.Subject;

@Repository
public interface StudyRepository extends JpaRepository<Subject, Long> {

}