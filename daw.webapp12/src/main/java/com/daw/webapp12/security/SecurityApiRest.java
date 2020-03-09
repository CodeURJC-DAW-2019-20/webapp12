package com.daw.webapp12.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
@Order(1)
public class SecurityApiRest extends WebSecurityConfigurerAdapter {

    @Autowired
    public UserRepositoryAuthenticationProvider authenticationProvider;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.antMatcher("/api/**");

        // here urls need authentication
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/user/{name}");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/user/");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/user/login").authenticated();
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/user/login");

        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/blog").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/blog/{id}").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/blog").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/blog/{id}").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/blog/{id}").hasAnyRole("ADMIN");


        http.authorizeRequests().antMatchers(HttpMethod.POST,"/api/main/upload/images").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/main/upload-images/img/{fileName:.+}").permitAll();

        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/advertisement/{id}").permitAll(); //hasAnyRole("USER");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/advertisement").hasAnyRole("USER", "ADMIN");

        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/users/advertisements/{id}").hasAnyRole("USER", "ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/users/favourites/{id}").hasAnyRole("USER", "ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/users/{id}").hasAnyRole("USER", "ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/users/{id}").hasAnyRole("USER", "ADMIN");


        // urls not need authentication
        http.authorizeRequests().anyRequest().permitAll();

        // disable csrf
        http.csrf().disable();

        http.httpBasic();

        //do not redirect when logout
        http.logout().logoutSuccessHandler((rq, rs, a) -> {
        });

    }

    @Override
    protected void configure(AuthenticationManagerBuilder authenticationManager) throws Exception {
        authenticationManager.authenticationProvider(authenticationProvider);
    }

}
