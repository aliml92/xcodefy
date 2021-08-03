package me.usaw.devblog.config;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

class UnauthenticatedRequestHandler implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
        if (request.getServletPath().startsWith("/YOUR_ADMIN_PATH")) {
            response.sendRedirect("/access-denied");
        } else {
            response.sendRedirect("/YOUR_LOGIN_PATH");
        }
    }
}