package resource;

import model.Room;
import rx.Observable;

import javax.inject.Inject;
import javax.ws.rs.CookieParam;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import static utils.CookieParams.ROOM_PLAYER_AUTH_COOKIE_NAME;

/**
 * Resource for creating player authentication.
 */
@Path("/room")
public class RoomResource {

    @Inject
    public RoomResource() {
    }

    /**
     * Removes the player from the room and from the table of authenticated users.
     * @return the result of whether the player was removed
     */
    @PUT
    @Path("/{roomId}/log-out")
    public Observable<Boolean> logOut(@PathParam("roomId") Integer roomId, @CookieParam(ROOM_PLAYER_AUTH_COOKIE_NAME) String jwtToken) {
        return Observable.empty();
    }

    /**
     * Set player ready to play the next round.
     * @return the result of whether the player was removed
     */
    @PUT
    @Path("/{roomId}/set-player-ready")
    public Observable<Boolean> setPlayerReady(@PathParam("roomId") Integer roomId, @CookieParam(ROOM_PLAYER_AUTH_COOKIE_NAME) String jwtToken) {
        return Observable.empty();
    }

    /**
     * Fetches the current status of the room.
     * @return Room
     */
    @GET
    @Path("/{roomId}/room-status")
    public Observable<Room> getRoomStatus(@PathParam("roomId") Integer roomId, @CookieParam(ROOM_PLAYER_AUTH_COOKIE_NAME) String jwtToken) {
        return Observable.empty();
    }

}
