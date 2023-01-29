package com.example.examsystem.business.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Log4j2


public class OptionDto {

    @NotNull(message = "{question.option.validation.constraints.NutNull.message}")
    private String option1;

    @NotNull(message = "{question.option.validation.constraints.NutNull.message}")
    private String option2;

    @NotNull(message = "{question.option.validation.constraints.NutNull.message}")
    private String option3;

    @NotNull(message = "{question.option.validation.constraints.NutNull.message}")
    private String option4;

    @NotNull(message = "{question.option.validation.constraints.NutNull.message}")
    private String option5;

    @NotNull(message = "{question.option.validation.constraints.NutNull.message}")
    private String answer;

}
