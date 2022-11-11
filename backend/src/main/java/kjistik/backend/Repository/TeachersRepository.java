package kjistik.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kjistik.backend.Models.Teachers;

@Repository
public interface TeachersRepository extends JpaRepository<Teachers, Long>{
    
}
