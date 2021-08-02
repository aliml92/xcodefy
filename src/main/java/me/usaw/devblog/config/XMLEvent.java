package me.usaw.devblog.config;

import me.usaw.devblog.service.XMLService;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.net.MalformedURLException;

@Configuration
@EnableScheduling
public class XMLEvent {


    private final XMLService xmlService;

    public XMLEvent(XMLService xmlService) {
        this.xmlService = xmlService;
    }

    @Scheduled(cron = "0 0 12 ? * MON")
    public void scheduleTaskUsingCronExpression() throws MalformedURLException {
        xmlService.generateXML();
    }
}
