package me.usaw.devblog.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class PostUtils {

    public static String postDateFormat(Date created, Date modified){
        String result = "";
        String pattern = "MMM dd, yyyy";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        if (created.equals(modified)){
            String date = simpleDateFormat.format(created);
            result = "created on " + date;
        } else {
            String date = simpleDateFormat.format(modified);
            result = "updated on " + date;
        }
        return result;
    }



}
