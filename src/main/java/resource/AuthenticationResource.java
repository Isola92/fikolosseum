package resource;

import rx.Observable;
import se.fortnox.reactivewizard.jaxrs.response.ResponseDecorator;
import service.PlayerAuthService;

import javax.inject.Inject;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

import static utils.CookieParams.ROOM_PLAYER_AUTH_COOKIE_NAME;

/**
 * Resource for creating player authentication.
 */
@Path("/authentication")
public class AuthenticationResource {

    private final PlayerAuthService playerAuthService;

    @Inject
    public AuthenticationResource(PlayerAuthService playerAuthService) {
        this.playerAuthService = playerAuthService;
    }

    /**
     * Generates an authentication for the player.
     * If the playerName is not used by other players, a JWT token will be returned.
     * @param playerName String     A playerName that will be used
     * @param roomId Integer        The room in which the player will join
     * @return an empty string in the response body and optionally a "Set-Cookie" response header
     */
    @PUT
    @Path("/player-auth/{roomId}")
    public Observable<String> playerAuth(@PathParam("roomId") Integer roomId, @HeaderParam("playerName") String playerName) {
        Map<String, String> headers = new HashMap<>();
        Observable<String> getTokenAndSetHeader = playerAuthService.playerLogin(playerName)
                .map(jwtToken -> {
                    String encodedToken = URLEncoder.encode(jwtToken, StandardCharsets.UTF_8);
                    headers.put("Set-Cookie", ROOM_PLAYER_AUTH_COOKIE_NAME + "=" + encodedToken + "; path=/; HttpOnly; SameSite=Strict; Secure;");
                    return "";
                });
        return ResponseDecorator.withHeaders(getTokenAndSetHeader, headers);
    }

}
