package lu.potapova.investmentsignals.controller;

import lu.potapova.investmentsignals.entity.Strategy;
import lu.potapova.investmentsignals.repository.StrategyRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("api/strategies")
public class StrategyController {

    private final StrategyRepository strategyRepository;

    public StrategyController(StrategyRepository strategyRepository) {
        this.strategyRepository = strategyRepository;
    }

    @GetMapping
    public List<Strategy> getStrategies() {
        return strategyRepository.findAll();
    }

    @GetMapping("/{id}")
    public Strategy getStrategy(@PathVariable Long id) {
        return strategyRepository.findById(id).orElseThrow(RuntimeException::new);
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