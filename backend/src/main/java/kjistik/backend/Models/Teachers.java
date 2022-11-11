package kjistik.backend.Models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "teachers")
public class Teachers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idTeacher")
    Long idTeacher;

    @Column(name = "teacher_name")
    String teacher_name;

    @Column(name = "teacher_lastName")
    String teacher_lastName;

    @ManyToOne
    @JoinColumn(name = "subject_teacher")
    Subject subject_teacher;

    @Column(name = "active")
    boolean active;

    @JsonBackReference (value="teachers_list")
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "idTeacher", cascade = CascadeType.ALL)
    List<Teachers> teachersList;

}
