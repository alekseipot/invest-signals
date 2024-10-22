package lu.potapova.investmentsignals.web.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RatingDto {
    private String label;
    private BigDecimal rating;
}
