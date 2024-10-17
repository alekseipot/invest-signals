package lu.potapova.investmentsignals.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardingController {

    //@RequestMapping(value = "/{path:^(?!api|static|favicon\\.ico|index\\.html).*}")
    @RequestMapping(value = "/{path:^(?!api|static|favicon\\.ico).*}")
    public String redirect() {
        return "forward:/index.html";
    }
}
