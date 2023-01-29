package com.example.examsystem.controller.managers;

import com.example.examsystem.business.dto.QuestionDto;
import com.example.examsystem.business.services.IQuestionService;
import com.example.examsystem.controller.IQuestionApi;
import com.example.examsystem.data.entities.QuestionEntity;
import com.example.examsystem.data.repository.IQuestionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Log4j2

@RestController
@RequestMapping("admin/control")
@CrossOrigin
public class QuestionApiManager implements IQuestionApi {

    private final IQuestionService iQuestionService;

    private final IQuestionRepository iQuestionRepository;

    //Create
    //http://localhost:3333/admin/control
    @Override
    @PostMapping
    public ResponseEntity<QuestionDto> createQuestion(@RequestBody QuestionDto questionDto) {
        iQuestionService.createQuestion(questionDto);
        return ResponseEntity.ok(questionDto);
    }

    //List
    //http://localhost:3333/admin/control/list
    @Override
    @GetMapping("/list")
    public ResponseEntity<List<QuestionDto>> getAllQuestions() {
        return ResponseEntity.ok(iQuestionService.getAllQuestions());
    }

    //Find
    //http://localhost:3333/admin/control/1
    @Override
    @GetMapping("/{id}")
    public ResponseEntity<?> getQuestionById(@PathVariable(name = "id") int id) {
        if(id == 0){
            log.error("400 Bas Request");
            return ResponseEntity.badRequest().body("400 Bad Request");
        }
        return ResponseEntity.ok(iQuestionService.getQuestionsById(id));
    }

    //QuestionNumber
    //http://localhost:3333/admin/control/number/1
    @Override
    @GetMapping(value = {"/number/{questionNumber}"})
    public List<QuestionEntity> findByQuestionNumber(@PathVariable int questionNumber){
        return iQuestionRepository.findByQuestionNumber(questionNumber);
    }

    //Update
    //http://localhost:3333/admin/control/1
    @Override
    @PutMapping("/{id}")
    public ResponseEntity<?> updateQuestion(@PathVariable(name = "id") int id, @RequestBody QuestionDto questionDto) {
        return ResponseEntity.ok(iQuestionService.updateQuestion(id, questionDto));
    }

    //Delete
    //http://localhost:3333/admin/control/1
    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteQuestion(@PathVariable(name = "id") int id) {
        return ResponseEntity.ok(iQuestionService.deleteQuestion(id));
    }


}
