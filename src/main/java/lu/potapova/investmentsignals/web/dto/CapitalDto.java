package lu.potapova.investmentsignals.web.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CapitalDto {
    private String start;
    private String end;
    private String benchmark;
}
