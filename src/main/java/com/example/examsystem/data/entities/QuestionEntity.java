package com.example.examsystem.data.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.extern.log4j.Log4j2;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Log4j2
@EqualsAndHashCode(of = "id")

@Entity
@Table(name = "questions")
public class QuestionEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private int id;

    @Column(name = "question_number")
    private int questionNumber;
    private String question;

    private String option1;
    private String option2;
    private String option3;
    private String option4;
    private String option5;
    private String answer;
}
