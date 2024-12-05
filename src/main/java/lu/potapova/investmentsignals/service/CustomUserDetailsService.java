package lu.potapova.investmentsignals.service;

import lu.potapova.investmentsignals.entity.User;
import lu.potapova.investmentsignals.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    private final ApplicationContext context;

    @Autowired
    public CustomUserDetailsService(UserRepository userRepository, ApplicationContext context) {
        this.userRepository = userRepository;
        this.context = context;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
        return org.springframework.security.core.userdetails.User.withUsername(user.getEmail())
                .password(user.getPassword())
                .authorities("USER") // Define roles or authorities here
                .build();
    }

    public void registerNewUser(String email, String password) {
        // Check if user already exists
        if (userRepository.findByEmail(email).isPresent()) {
            throw new IllegalArgumentException("User with this email already exists");
        }
        PasswordEncoder passwordEncoder = context.getBean(PasswordEncoder.class);

        // Create new User entity
        User newUser = new User();
        newUser.setEmail(email);
        newUser.setPassword(passwordEncoder.encode(password)); // Encode password
        newUser.setCreationDate(LocalDateTime.now());

        // Save user to the repository
        userRepository.save(newUser);
    }
}
