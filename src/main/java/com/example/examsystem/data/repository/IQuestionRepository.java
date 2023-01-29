package com.example.examsystem.data.repository;

import com.example.examsystem.data.entities.QuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IQuestionRepository extends JpaRepository<QuestionEntity,Integer> {

    @Query(nativeQuery= true, value="SELECT * FROM questions WHERE question_number = ?")
    List<QuestionEntity> findByQuestionNumber(int questionNumber);

}
