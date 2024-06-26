package lu.potapova.investmentsignals.repository;

import lu.potapova.investmentsignals.entity.Strategy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StrategyRepository extends JpaRepository<Strategy, Long> {
}

