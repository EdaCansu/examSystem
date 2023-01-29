package com.example.examsystem.business.services.managers;


import com.example.examsystem.bean.ModelMapperBean;
import com.example.examsystem.bean.PasswordEncoderBean;
import com.example.examsystem.business.dto.QuestionDto;
import com.example.examsystem.business.services.IQuestionService;
import com.example.examsystem.data.entities.QuestionEntity;
import com.example.examsystem.data.repository.IQuestionRepository;
import com.example.examsystem.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Log4j2

@Service
@Transactional
public class QuestionServiceManager implements IQuestionService {

    private final IQuestionRepository iQuestionRepository;

    private final ModelMapperBean modelMapperBean;

    private final PasswordEncoderBean passwordEncoderBean;

    //Model Mapper
    @Override
    public QuestionDto entityToDto(QuestionEntity questionEntity) {
        return modelMapperBean.modelMapperMethod().map(questionEntity, QuestionDto.class);
    }

    @Override
    public QuestionEntity dtoToEntity(QuestionDto questionDto) {
        return modelMapperBean.modelMapperMethod().map(questionDto, QuestionEntity.class);
    }

    //Create
    @Override
    public QuestionDto createQuestion(QuestionDto questionDto) {
        if(questionDto != null){
            QuestionEntity questionEntity = dtoToEntity(questionDto);
            iQuestionRepository.save(questionEntity);
        }
        return questionDto;
    }


    //List
    @Override
    public List<QuestionDto> getAllQuestions() {
        Iterable<QuestionEntity> questionEntityList = iQuestionRepository.findAll();
        List<QuestionDto> questionDtoList = new ArrayList<>();
        for (QuestionEntity questionEntity: questionEntityList) {
            QuestionDto questionDto = entityToDto(questionEntity);
            questionDtoList.add(questionDto);
        }
        return questionDtoList;
    }


    //Find
    @Override
    public QuestionDto getQuestionsById(int id) {
        QuestionEntity questionEntityFind = iQuestionRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Question number " + id + " not found!"));
        QuestionDto questionDto = entityToDto(questionEntityFind);
        return questionDto;
    }


    //Update
    @Override
    public QuestionDto updateQuestion(int id, QuestionDto questionDto) {
        QuestionEntity questionEntityFind = iQuestionRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Question number " + id + " not found!"));
        if(questionEntityFind != null){
            questionEntityFind.setQuestionNumber(questionDto.getQuestionNumber());
            questionEntityFind.setQuestion(questionDto.getQuestion());
            questionEntityFind.setOption1(questionDto.getOption1());
            questionEntityFind.setOption2(questionDto.getOption2());
            questionEntityFind.setOption3(questionDto.getOption3());
            questionEntityFind.setOption4(questionDto.getOption4());
            questionEntityFind.setOption5(questionDto.getOption5());
            questionEntityFind.setAnswer(questionDto.getAnswer());
            iQuestionRepository.save(questionEntityFind);
        }
        return questionDto;
    }

    //Delete
    @Override
    public Map<String, Boolean> deleteQuestion(int id) {
        QuestionEntity questionEntityFind = iQuestionRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Question number " + id + " not found!"));
        Map<String,Boolean> response=new LinkedHashMap<>();
        if(questionEntityFind != null){
            iQuestionRepository.delete(questionEntityFind);
            response.put("Deleted", Boolean.TRUE);
        }
        return response;
    }

}
