package lu.potapova.investmentsignals.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Data
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String label;
    private BigDecimal rating;

    @ManyToOne
    @JoinColumn(name = "strategy_id")
    private Strategy strategy;
}
