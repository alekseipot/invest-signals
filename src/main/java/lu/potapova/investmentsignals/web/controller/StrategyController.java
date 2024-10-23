package lu.potapova.investmentsignals.web.controller;

import lu.potapova.investmentsignals.entity.Strategy;
import lu.potapova.investmentsignals.repository.StrategyRepository;
import lu.potapova.investmentsignals.web.dto.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/strategies")
public class StrategyController {
    private final List<StrategyDetailsDto> strategies = List.of(
            new StrategyDetailsDto(1,
                    "Stock Market Strategy 1",
                    "Best strategy for high-return stock investments.",
                    List.of(
                            new RatingDto("Chance", new BigDecimal("4.5")),
                            new RatingDto("Risk", new BigDecimal("3.2")),
                            new RatingDto("Comfort", new BigDecimal("5"))
                    ),
                    List.of(
                            new CharacteristicDto("Basic Data", Map.of(
                                    "Investment Horizon", "3 years",
                                    "Strategic Approach", "Multi-strategy",
                                    "Trading Directions", "LONG + SHORT",
                                    "Regions", "Worldwide",
                                    "Asset Classes", "Shares, Money Market, Raw Materials",
                                    "Minimum Capital", "136,000 €",
                                    "Max. Number of Positions", "34",
                                    "Transactions", "3,084 (124.5 pa)",
                                    "Number of Trading Days", "75.2 pa",
                                    "Benchmark", "MSCI World Net"
                            )),
                            new CharacteristicDto("Capital", Map.of(
                                    "Start (12/1999)", "100,000 €",
                                    "End of 09/2024", "2,528,150 €"
                            )),
                            new CharacteristicDto("Return", Map.of(
                                    "Total Return", "2,428.15%",
                                    "Yield p.a. (Geo.)", "13.93%",
                                    "Return in 2023", "7.63%",
                                    "Yield 2024 YTD", "10.86%"
                            )),
                            new CharacteristicDto("Risk", Map.of(
                                    "Maximum Decline", "-17.96%",
                                    "Medium Decline", "-2.88%",
                                    "Volatility p.a.", "9.14%",
                                    "Longest Losing Period", "1.80 years"
                            )),
                            new CharacteristicDto("Return to Risk", Map.of(
                                    "Yield / Max. Decline", "0.78",
                                    "Yield / Average Decline", "4.84",
                                    "Return / Volatility p.a.", "1.52"
                            ))
                    ),
                    new CapitalDto("100,000 €", "2,528,150 €", "370,490 €"),
                    "15%",
                    "Moderate",
                    "High",
                    "€49.99/month",
                    "+13.93% p.a."
            ),
            new StrategyDetailsDto(2,
                    "Real Estate Strategy 1",
                    "Maximize long-term returns...",
                    List.of(
                            new RatingDto("Risk", new BigDecimal("2.2")),
                            new RatingDto("Comfort", new BigDecimal("4.6"))
                    ),
                    List.of(
                            new CharacteristicDto("Basic Data", Map.of(
                                    "Investment Horizon", "10 years",
                                    "Strategic Approach", "Real Estate Focus",
                                    "Regions", "Europe",
                                    "Asset Classes", "Real Estate",
                                    "Minimum Capital", "150,000 €",
                                    "Max. Number of Positions", "10",
                                    "Transactions", "500",
                                    "Benchmark", "Real Estate Index",
                                    "Outperformance", "10% p.a."
                            )),
                            new CharacteristicDto("Capital", Map.of(
                                    "Start", "150,000 €",
                                    "End", "3,150,000 €"
                            )),
                            new CharacteristicDto("Return", Map.of(
                                    "Total Return", "1,000%",
                                    "Yield p.a. (Geo.)", "9.85%"
                            )),
                            new CharacteristicDto("Risk", Map.of(
                                    "Maximum Decline", "-10%",
                                    "Volatility p.a.", "5%"
                            )),
                            new CharacteristicDto("Return to Risk", Map.of(
                                    "Return / Volatility p.a.", "2.0"
                            ))
                    ),
                    new CapitalDto("150,000 €", "3,150,000 €", "500,000 €"),
                    "10%",
                    "Low",
                    "Medium",
                    "€79.99/month",
                    "+9.85% p.a."
            )
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