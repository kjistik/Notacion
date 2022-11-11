package kjistik.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kjistik.backend.Models.Students;

@Repository
public interface StudentRepository extends JpaRepository<Students, Long> {

}