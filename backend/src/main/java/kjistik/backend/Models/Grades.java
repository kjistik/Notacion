package kjistik.backend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//relaciones con otras entidades
//many to one (teachers)
//many to one (students)

@Table(name = "grades")
@Entity(name = "grades")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Grades {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idGrade")
    long idGrade;

    // la anotación @JoinColumn indica que esta columna compartirá información con otra tabla

    @ManyToOne
    @JoinColumn(name = "grades_student")
    Students grades_student;


    @ManyToOne
    @JoinColumn(name = "grades_teacher")
    Teachers grades_teacher;

    @Column(name = "grade")
    int grade;

}