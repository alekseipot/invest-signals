package lu.potapova.investmentsignals.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Map;

@Entity
@Data
public class Characteristic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ElementCollection
    @CollectionTable(name = "characteristic_properties", joinColumns = @JoinColumn(name = "characteristic_id"))
    @MapKeyColumn(name = "property_name")
    @Column(name = "property_value")
    private Map<String, String> properties;

    @ManyToOne
    @JoinColumn(name = "strategy_id")
    private Strategy strategy;
}
