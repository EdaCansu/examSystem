package com.example.examsystem.controller;

import com.example.examsystem.business.dto.QuestionDto;
import com.example.examsystem.data.entities.QuestionEntity;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface IQuestionApi {

    //Create
    ResponseEntity<QuestionDto> createQuestion(QuestionDto questionDto);

    //List
    ResponseEntity<List<QuestionDto>> getAllQuestions();

    //Find
    ResponseEntity<?> getQuestionById(int id);

    //Question Number
    List<QuestionEntity> findByQuestionNumber(int questionNumber);


    //Update
    ResponseEntity<?> updateQuestion(int id, QuestionDto questionDto);

    //Delete
    ResponseEntity<Map<String, Boolean>> deleteQuestion(int id);
}
