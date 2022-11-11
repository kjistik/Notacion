package kjistik.backend.Models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

//relaciones con otras entidades
//one to many (teachers)

@Entity
@Table(name = "subjects")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class Subject {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "idSubject")
        Long idSubject;

        @Column(name = "active")
        boolean active;

        @Column(name = "subject_name")
        String subject_name;


        @JsonBackReference(value = "subject_teacher")
        @OneToMany(mappedBy = "subject_teacher")
        List<Teachers> subject_teacher;

}
