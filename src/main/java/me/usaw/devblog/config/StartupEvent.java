package me.usaw.devblog.config;

import me.usaw.devblog.service.HibernateSearchService;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;


@Configuration
@EnableScheduling
public class StartupEvent {

    private final HibernateSearchService service;

    public StartupEvent(HibernateSearchService service) {
        this.service = service;
    }

    @Scheduled(cron = "0 0 12 ? * THU")
    public void scheduleTaskUsingCronExpression() {
        service.initializeHibernateSearch();
    }

}
