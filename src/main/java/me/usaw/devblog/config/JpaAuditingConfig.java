package me.usaw.devblog.config;

import me.usaw.devblog.entity.User;
import me.usaw.devblog.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

@Configuration
public class JpaAuditingConfig {

    private final UserRepository userRepository;

    public JpaAuditingConfig(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Bean
    public AuditorAware<User> userAuditorAware(){
        return () -> {
            SecurityContext context = SecurityContextHolder.getContext();
            if(context != null && context.getAuthentication() != null){
                return userRepository.findByEmail(context.getAuthentication().getName());
            }
            return Optional.empty();
        };
    }
}
