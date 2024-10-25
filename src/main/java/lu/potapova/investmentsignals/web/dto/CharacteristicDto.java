package lu.potapova.investmentsignals.web.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CharacteristicDto {

    private Long id;
    private String title;
    private Map<String, String> properties;
}
