package me.usaw.devblog.entity;


import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.IndexedEmbedded;


import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Entity
@Indexed
@Data
public class Post implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String sfid;
    @FullTextField
    private String title;
    @Column(columnDefinition = "text")
    @FullTextField(analyzer = "stop")
    private String content;
    @Column(length = 300)
    private String contentPart;
    @Column
    private String imageName;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date modifiedDate;

    @Transient
    private String postDate;

    @Column(nullable = false)
    private boolean active = false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "post", fetch = FetchType.EAGER,
            orphanRemoval = true,cascade = CascadeType.ALL)
    @OrderBy("createdDate DESC")
    private List<Comment> comments;

    @IndexedEmbedded
    @ManyToMany(cascade = {CascadeType.PERSIST,CascadeType.MERGE})
    @JoinTable(name = "post_tag",
            joinColumns = @JoinColumn(name = "post_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tag> tags = new HashSet<>();

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.PERSIST)
    @JoinColumn(name = "category_id")
    private Category category;

    public Post() {
    }

    public Post(Long id){
        this.id = id;
    }

    public Post(Long id, String title){
        this.id = id;
        this.title = title;
    }
    public Post(String sfid, String title){
        this.sfid = sfid;
        this.title = title;
    }

    public Post(String title, String sfid, String contentPart,
                Date createdDate, Date modifiedDate,
                Category category) {
        this.title = title;
        this.sfid = sfid;
        this.contentPart = contentPart;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.category = category;
    }

    public Post(String sfid, Date modifiedDate) {
        this.sfid = sfid;
        this.modifiedDate = modifiedDate;
    }

    public void addTag(Tag tag) {
        tags.add(tag);
        tag.getPosts().add(this);
    }


}
