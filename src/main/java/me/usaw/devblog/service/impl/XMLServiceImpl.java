package me.usaw.devblog.service.impl;

import com.redfin.sitemapgenerator.ChangeFreq;
import com.redfin.sitemapgenerator.WebSitemapGenerator;
import com.redfin.sitemapgenerator.WebSitemapUrl;
import me.usaw.devblog.entity.Category;
import me.usaw.devblog.entity.Post;
import me.usaw.devblog.entity.Tag;
import me.usaw.devblog.repository.CategoryRepository;
import me.usaw.devblog.repository.PostRepository;
import me.usaw.devblog.repository.TagRepository;
import me.usaw.devblog.service.XMLService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.net.MalformedURLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
public class XMLServiceImpl implements XMLService {

    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;
    private final TagRepository tagRepository;
    private  String url = "https://www.xcodefy.com/";

    @Value("${upload.path}")
    private String path;


    public XMLServiceImpl(PostRepository postRepository,
                          CategoryRepository categoryRepository,
                          TagRepository tagRepository) {
        this.postRepository = postRepository;
        this.categoryRepository = categoryRepository;
        this.tagRepository = tagRepository;
    }


    @Override
    @Transactional(readOnly = true)
    public void generateXML() throws MalformedURLException {
        WebSitemapGenerator sitemapGenerator = WebSitemapGenerator
                .builder("https://www.xcodefy.com", new File(path))
                .gzip(false).build();


        // categories
        List<Category> categories = categoryRepository.getCatsMXL();
        if(!categories.isEmpty()){
            categories.forEach(c -> {
                    try {
                        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
                        WebSitemapUrl sitemapUrl = new WebSitemapUrl.Options(url + c.getName())
                                .lastMod(format.format(new Date())).priority(0.8)
                                .changeFreq(ChangeFreq.WEEKLY).build();
                        sitemapGenerator.addUrl(sitemapUrl);
                    } catch (MalformedURLException | ParseException e) {
                        e.printStackTrace();
                    }

            });
        }

        //tags
        List<Tag> tags = tagRepository.getTagsMXL();
        if(!tags.isEmpty()){
            tags.forEach(t -> {
                try {
                    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
                    WebSitemapUrl sitemapUrl = new WebSitemapUrl.Options(url + t.getName())
                            .lastMod(format.format(new Date())).priority(0.8)
                            .changeFreq(ChangeFreq.WEEKLY).build();
                    sitemapGenerator.addUrl(sitemapUrl);
                } catch (MalformedURLException | ParseException e) {
                    e.printStackTrace();
                }

            });
        }

         //posts
        List<Optional<Post>> posts = postRepository.getPostForXML();
        if (!posts.isEmpty()){
            posts.forEach(p -> {
                if (p.isPresent()){
                    Post post = p.get();
                    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
                    try {
                        WebSitemapUrl sitemapUrl = new WebSitemapUrl.Options(url + post.getSfid())
                                .lastMod(format.format(post.getModifiedDate())).priority(0.5)
                                .changeFreq(ChangeFreq.YEARLY).build();
                        sitemapGenerator.addUrl(sitemapUrl);
                    } catch (MalformedURLException | ParseException e) {
                        e.printStackTrace();
                    }

                }

            });
        }

        sitemapGenerator.write();

    }
}
