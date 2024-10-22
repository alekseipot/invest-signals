package lu.potapova.investmentsignals.web.controller;

import lu.potapova.investmentsignals.entity.Strategy;
import lu.potapova.investmentsignals.repository.StrategyRepository;
import lu.potapova.investmentsignals.web.dto.CapitalDto;
import lu.potapova.investmentsignals.web.dto.StrategyDetailsDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("api/strategies")
public class StrategyController {
    private final List<StrategyDetailsDto> strategies = List.of(
            new StrategyDetailsDto(1, "Stock Market Strategy 1", "Best strategy for high-return stock investments.",
                    "/images/stock_market_strategies.jpg", "This strategy focuses on blue-chip stocks...",
                    new CapitalDto("100,000 €", "2,528,150 €", "370,490 €"),
                    "15%", "Moderate", "High", "€49.99/month", "+13.93% p.a."),
            new StrategyDetailsDto(2, "Real Estate Strategy 1", "Maximize long-term returns...",
                    "/images/real_estate_strategies.jpg", "This strategy focuses on purchasing undervalued real estate...",
                    new CapitalDto("150,000 €", "3,150,000 €", "500,000 €"),
                    "10%", "Low", "Medium", "€79.99/month", "+9.85% p.a.")
    );

    private final StrategyRepository strategyRepository;

    public StrategyController(StrategyRepository strategyRepository) {
        this.strategyRepository = strategyRepository;
    }

    @GetMapping
    public List<Strategy> getStrategies() {
        return strategyRepository.findAll();
    }

    @GetMapping("/{id}")
    public StrategyDetailsDto getStrategyDetails(@PathVariable("id") Long id) {
        return strategies.stream()
                .filter(strategy -> strategy.getId() == id)
                .findFirst()
                .orElse(null);
    }

    @PostMapping
    public ResponseEntity<Strategy> createStrategy(@RequestBody Strategy strategy) throws URISyntaxException {
        final var savedStrategy = strategyRepository.save(strategy);
        return ResponseEntity.created(new URI("/strategies/" + savedStrategy.getId())).body(savedStrategy);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Strategy> updateStrategy(@PathVariable Long id, @RequestBody Strategy strategy) {
        var currentStrategy = strategyRepository.findById(id).orElseThrow(RuntimeException::new);
        currentStrategy.setName(strategy.getName());
        currentStrategy = strategyRepository.save(strategy);

        return ResponseEntity.ok(currentStrategy);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Strategy> deleteStrategy(@PathVariable Long id) {
        strategyRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}