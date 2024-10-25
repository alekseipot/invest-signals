package lu.potapova.investmentsignals.service;

import lu.potapova.investmentsignals.entity.Strategy;
import lu.potapova.investmentsignals.repository.StrategyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StrategyService {

    private final StrategyRepository strategyRepository;

    public StrategyService(StrategyRepository strategyRepository) {
        this.strategyRepository = strategyRepository;
    }

    public List<Strategy> getAllStrategies() {
        return strategyRepository.findAll();
    }

    public Strategy getStrategyById(Long id) {
        return strategyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Strategy not found with ID: " + id));
    }

}
