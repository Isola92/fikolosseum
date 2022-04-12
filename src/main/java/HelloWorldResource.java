package main.java;


import rx.Observable;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

import static rx.Observable.just;

@Path("/helloworld")
public class HelloWorldResource {

    @Inject
    public HelloWorldResource() {
    }

    @GET
    public Observable<String> greeting() {
        return just("Hello world!");
    }
}