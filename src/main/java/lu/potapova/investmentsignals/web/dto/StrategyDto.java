package lu.potapova.investmentsignals.web.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StrategyDto {
    private int id;
    private String name;
    private String description;
    private String returnRate;
    private String risk;
    private String returnToRisk;
    private String price;
    private String performance;
    private List<RatingDto> ratings;
    private List<CharacteristicDto> characteristics;

}
