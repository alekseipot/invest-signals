package lu.potapova.investmentsignals.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "strategy")
public class Strategy {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
}
