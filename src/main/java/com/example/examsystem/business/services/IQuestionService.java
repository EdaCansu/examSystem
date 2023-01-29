package com.example.examsystem.business.services;

import com.example.examsystem.business.dto.QuestionDto;
import com.example.examsystem.data.entities.QuestionEntity;

import java.util.List;
import java.util.Map;

public interface IQuestionService {

    //Model mapper
    QuestionDto entityToDto(QuestionEntity questionEntity);

    QuestionEntity dtoToEntity(QuestionDto questionDto);


    //Create
    QuestionDto createQuestion(QuestionDto questionDto);

    //List
    List<QuestionDto> getAllQuestions();

    //Find
    QuestionDto getQuestionsById(int id);


    //Update

    QuestionDto updateQuestion(int id, QuestionDto questionDto);

    //Delete
    Map<String,Boolean> deleteQuestion(int id);

}
