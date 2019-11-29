import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  async model( { path } ) {
    const prefix = "http://mu.semte.ch/";
    const subject = `${prefix}${path}`;

    const requestUrl = new URL(`${window.location.origin}/uri-info/`);
    requestUrl.searchParams.append("subject", subject);
    const response = await fetch( requestUrl );
    const jsonResponse = await response.json();

    return { triples: jsonResponse, subject: subject };
  }
});
