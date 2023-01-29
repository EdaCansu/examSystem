package com.example.examsystem.business.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Log4j2

public class QuestionDto extends OptionDto  {

    private int id;

    @NotNull(message = "{question.question.validation.constraints.NutNull.message}")
    private int questionNumber;

    @NotNull(message = "{question.question.validation.constraints.NutNull.message}")
    private String question;
}
