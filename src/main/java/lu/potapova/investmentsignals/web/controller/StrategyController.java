package lu.potapova.investmentsignals.web.controller;

import lu.potapova.investmentsignals.entity.Strategy;
import lu.potapova.investmentsignals.service.StrategyService;
import lu.potapova.investmentsignals.web.dto.StrategyDto;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/public/strategies")
public class StrategyController {

    private final StrategyService strategyService;
    private final ModelMapper modelMapper;

    public StrategyController(StrategyService strategyService, ModelMapper modelMapper) {
        this.strategyService = strategyService;
        this.modelMapper = modelMapper;
    }

    @GetMapping
    public List<Strategy> getStrategies() {
        return strategyService.getAllStrategies();
    }

    @GetMapping("/{id}")
    public StrategyDto getStrategyDetails(@PathVariable("id") Long id) {
        final var strategy = strategyService.getStrategyById(id);
        return modelMapper.map(strategy, StrategyDto.class);
    }
}
