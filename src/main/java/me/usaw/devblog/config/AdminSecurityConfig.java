package me.usaw.devblog.config;

import me.usaw.devblog.service.impl.CustomUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



@Configuration
@EnableWebSecurity
public class AdminSecurityConfig extends WebSecurityConfigurerAdapter {

    private final CustomUserDetailsService userDetailsService;

    public AdminSecurityConfig(CustomUserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    public String[] MVC_MATCHERS = {
            "/assets/**",
            "/images/**",
            "/topic/*",
            "/*",
            "/page/*",
            "/tag/*",
            "/search?*",
            "/authComment",
            "/YOUR_LOGIN_PATH", // set your login path to admin panel
            "/saveComment"

    };

    @Bean
    public DaoAuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }



    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .authorizeRequests()
                .mvcMatchers(MVC_MATCHERS).permitAll()
                .mvcMatchers("/YOUR_ADMIN_PATH/**").hasAuthority("ADMIN")
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/YOUR_LOGIN_PATH")
                .defaultSuccessUrl("/YOUR_ADMIN_PATH")
                .failureUrl("/YOUR_LOGIN_PATH?error=true")
                .and().logout().logoutSuccessUrl("/YOUR_LOGIN_PATH?logout")
                .and().exceptionHandling().authenticationEntryPoint(unauthenticatedRequestHandler())
                .and().csrf().ignoringAntMatchers("/saveComment");


    }
    @Bean
    UnauthenticatedRequestHandler unauthenticatedRequestHandler() {
        return new UnauthenticatedRequestHandler();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(4);
    }
}
