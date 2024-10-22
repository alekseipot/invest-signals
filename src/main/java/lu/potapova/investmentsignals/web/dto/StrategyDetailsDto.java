package lu.potapova.investmentsignals.web.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StrategyDetailsDto {
    private int id;
    private String name;
    private String description;
    private String image;
    private String details;
    private CapitalDto capital;
    private String returnRate;
    private String risk;
    private String returnToRisk;
    private String price;
    private String performance;

}
