package lu.potapova.investmentsignals.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Strategy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String returnRate;
    private String risk;
    private String returnToRisk;
    private String price;
    private String performance;

    @OneToMany(mappedBy = "strategy", cascade = CascadeType.ALL)
    private List<Rating> ratings;

    @OneToMany(mappedBy = "strategy", cascade = CascadeType.ALL)
    private List<Characteristic> characteristics;

}
